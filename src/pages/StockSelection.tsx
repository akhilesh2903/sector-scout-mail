import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, TrendingUp, TrendingDown, Star, Plus } from "lucide-react";

const StockSelection = () => {
  const [selectedStocks, setSelectedStocks] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const sectors = [
    {
      name: "Technology",
      color: "bg-blue-500",
      stocks: [
        { symbol: "AAPL", name: "Apple Inc.", price: "$182.52", change: "+1.24%" },
        { symbol: "GOOGL", name: "Alphabet Inc.", price: "$138.21", change: "+0.87%" },
        { symbol: "MSFT", name: "Microsoft Corp.", price: "$378.85", change: "+2.15%" },
        { symbol: "NVDA", name: "NVIDIA Corp.", price: "$875.28", change: "+3.42%" },
        { symbol: "TSLA", name: "Tesla Inc.", price: "$248.42", change: "-0.65%" }
      ]
    },
    {
      name: "Healthcare",
      color: "bg-green-500",
      stocks: [
        { symbol: "JNJ", name: "Johnson & Johnson", price: "$155.67", change: "+0.45%" },
        { symbol: "PFE", name: "Pfizer Inc.", price: "$29.85", change: "-0.32%" },
        { symbol: "UNH", name: "UnitedHealth Group", price: "$515.42", change: "+1.18%" },
        { symbol: "ABBV", name: "AbbVie Inc.", price: "$172.33", change: "+0.89%" }
      ]
    },
    {
      name: "Finance",
      color: "bg-purple-500",
      stocks: [
        { symbol: "JPM", name: "JPMorgan Chase", price: "$155.84", change: "+0.76%" },
        { symbol: "BAC", name: "Bank of America", price: "$38.92", change: "+1.03%" },
        { symbol: "WFC", name: "Wells Fargo", price: "$42.18", change: "+0.55%" },
        { symbol: "GS", name: "Goldman Sachs", price: "$385.67", change: "+1.45%" }
      ]
    },
    {
      name: "Energy",
      color: "bg-orange-500",
      stocks: [
        { symbol: "XOM", name: "Exxon Mobil", price: "$102.34", change: "+2.18%" },
        { symbol: "CVX", name: "Chevron Corp.", price: "$155.78", change: "+1.89%" },
        { symbol: "COP", name: "ConocoPhillips", price: "$125.45", change: "+1.67%" }
      ]
    }
  ];

  const popularStocks = [
    { symbol: "SPY", name: "SPDR S&P 500 ETF", price: "$445.67", change: "+0.89%" },
    { symbol: "QQQ", name: "Invesco QQQ Trust", price: "$375.23", change: "+1.25%" },
    { symbol: "VTI", name: "Vanguard Total Stock", price: "$245.88", change: "+0.67%" }
  ];

  const handleStockToggle = (symbol: string) => {
    setSelectedStocks(prev => 
      prev.includes(symbol) 
        ? prev.filter(s => s !== symbol)
        : [...prev, symbol]
    );
  };

  const StockCard = ({ stock }: { stock: any }) => {
    const isSelected = selectedStocks.includes(stock.symbol);
    const isPositive = stock.change.startsWith('+');
    
    return (
      <Card className={`cursor-pointer transition-all duration-200 hover:shadow-medium ${isSelected ? 'ring-2 ring-primary bg-primary/5' : ''}`}>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
              <Checkbox
                checked={isSelected}
                onCheckedChange={() => handleStockToggle(stock.symbol)}
              />
              <div>
                <div className="font-semibold text-lg">{stock.symbol}</div>
                <div className="text-sm text-muted-foreground">{stock.name}</div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleStockToggle(stock.symbol)}
            >
              {isSelected ? <Star className="h-4 w-4 fill-primary text-primary" /> : <Plus className="h-4 w-4" />}
            </Button>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">{stock.price}</div>
            <div className={`flex items-center text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {isPositive ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
              {stock.change}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Select Your Stocks</h1>
          <p className="text-muted-foreground">Choose the stocks you want to receive daily email alerts for</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search for stocks by symbol or company name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Selected Stocks Summary */}
        {selectedStocks.length > 0 && (
          <Card className="mb-8 bg-gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Star className="h-5 w-5 mr-2 text-primary" />
                Selected Stocks ({selectedStocks.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {selectedStocks.map(symbol => (
                  <Badge key={symbol} variant="default" className="px-3 py-1">
                    {symbol}
                  </Badge>
                ))}
              </div>
              <Button className="mt-4 bg-gradient-primary hover:bg-primary-hover">
                Save Selection & Setup Alerts
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Stock Selection Tabs */}
        <Tabs defaultValue="sectors" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="sectors">By Sectors</TabsTrigger>
            <TabsTrigger value="popular">Popular Stocks</TabsTrigger>
          </TabsList>

          <TabsContent value="sectors" className="space-y-8">
            {sectors.map((sector, index) => (
              <div key={index}>
                <div className="flex items-center mb-4">
                  <div className={`w-4 h-4 rounded-full ${sector.color} mr-3`}></div>
                  <h2 className="text-2xl font-semibold">{sector.name}</h2>
                  <Badge variant="outline" className="ml-2">
                    {sector.stocks.length} stocks
                  </Badge>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {sector.stocks.map((stock, stockIndex) => (
                    <StockCard key={stockIndex} stock={stock} />
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="popular" className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Most Popular ETFs & Index Funds</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {popularStocks.map((stock, index) => (
                  <StockCard key={index} stock={stock} />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" size="lg">
            Save as Draft
          </Button>
          <Button size="lg" className="bg-gradient-primary hover:bg-primary-hover">
            Continue to Alert Settings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StockSelection;