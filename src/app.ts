// import the express application and type definition
import express, { Express, Request, Response } from "express";
import { calculatePortfolioPerformance,
    findLargestHolding,
    assetAllocationPercentage,
    Asset,
    
 } from "./portfolio/portfolioPerformance";
// initialize Express application
const app: Express = express();

// Interface for health check response
interface HealthCheckResponse {
    status: string;
    uptime: number;
    timestamp: string;
    version: string;
}

// Define basic routes
app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
});

/**
 * Health check endpoint that returns status of the server
 * @returns JSON response with server health metrics
 */
app.get("/api/v1/health", (req, res) => {
    const healthData: HealthCheckResponse = {
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    };

    res.json(healthData);
});

// Portfolio performance endpoint at /api/v1/portfolio/performance
app.get('/api/v1/portfolio/performance', (req: Request, res: Response) => {
    const initialInvestment = Number(req.query.initialInvestment) || 5000;
    const currentValue = Number(req.query.currentValue) || 7500;

    const result = calculatePortfolioPerformance(initialInvestment, currentValue);
    res.json(result);
});

// Largest holding endpoint at /api/v1/portfolio/largest-holding
app.get('/api/v1/portfolio/largest-holding', (req: Request, res: Response) => {
    const assets: Asset[] = [
        { name: 'House', value: 2000 },
        { name: 'Stocks', value: 1000 },
        { name: 'Bonds', value: 500 },

    ];
    const largest = findLargestHolding(assets);
    res.json(largest);
});

// Asset allocation endpoint at /api/v1/portfolio/allocation
app.get('/api/v1/portfolio/allocation', (req: Request, res: Response) => {
     const asset: Asset[] = [
        { name: "stocks", value: 5000 },
        { name: "bonds", value: 5000 },
    ];
    const allocation = assetAllocationPercentage(asset);
    res.json(allocation)
})

export default app;