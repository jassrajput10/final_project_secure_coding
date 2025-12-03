import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";
import { findLargestHolding, Asset } from '../src/portfolio/portfolioPerformance';
import { assetAllocationPercentage } from '../src/portfolio/portfolioPerformance';

describe('calculatePortfolioPerformance', () => {
    it('should calculate profit when the case is profit', () => {
        const result = calculatePortfolioPerformance(5000, 7500);

        expect(result.initialInvestment).toBe(5000);
        expect(result.currentValue).toBe(7500);
        expect(result.profitOrLoss).toBe(2500);
        expect(result.percentageChange).toBe(50);
        expect(result.performanceSummary).toBe('The portfolio has gained significantly with a profit of $2500.00.');
    });
});
describe('calculatePortfolioPerformance', () => {
    it('should calculate the case with no profit', () => {
        const result = calculatePortfolioPerformance(5000, 5000);

        expect(result.initialInvestment).toBe(5000);
        expect(result.currentValue).toBe(5000);
        expect(result.profitOrLoss).toBe(0);
        expect(result.percentageChange).toBe(0);
        expect(result.performanceSummary).toBe('There is no change in portfolio');
    });    
});

describe('calculatePortfolioPerformance', () => {
    it('should calculate the case with loss', () => {
        const result = calculatePortfolioPerformance(10000, 5000);

        expect(result.initialInvestment).toBe(10000);
        expect(result.currentValue).toBe(5000);
        expect(result.profitOrLoss).toBe(-5000);
        expect(result.percentageChange).toBe(-50);
        expect(result.performanceSummary).toBe('The portfolio has lost significantly with the loss of $-5000.00.');
    });    
});

describe("findlargestHolding", () => {
    it('should find largest regular asset', () => {
        const assets: Asset[] = [
            { name: 'House', value: 2000 },
            { name: 'Stocks', value: 1000 },
            { name: 'Bonds', value: 500 },

        ];
        const largest = findLargestHolding(assets);
        expect(largest).toEqual({ name: 'House', value: 2000});
    });
});

describe("findlargestHolding", () => {
    it('should find largest regular asset', () => {
        const assets: Asset[] = [
            { name: 'House', value: 2000 },
            { name: 'Stocks', value: 1000 },
            { name: 'Bonds', value: 500 },

        ];
        const largest = findLargestHolding(assets);
        expect(largest).toEqual({ name: 'House', value: 2000});
    });
    it('returns empty array', () => {
        const assets: Asset[] = [];
        
        const empty = findLargestHolding(assets);
        expect(empty).toBeNull();
    });
});

describe("assetAllocationPercentage", () => {
    it('even distribution', () => {
        const asset: Asset[] = [
            { name: "stocks", value: 5000 },
            { name: "bonds", value: 5000 },
        ];
        const distribution = assetAllocationPercentage(asset);
        expect(distribution).toEqual([
            { name: "stocks", value: 5000, percentage: 50 },
            { name: "bonds", value: 5000, percentage: 50 },
        ]);
    });
    it('uneven distribution', () => {
        const asset: Asset[] = [
            { name: "stocks", value: 7500 },
            { name: "bonds", value: 2500 },
        ];
        const distribution = assetAllocationPercentage(asset);
        expect(distribution).toEqual([
            { name: "stocks", value: 7500, percentage: 75 },
            { name: "bonds", value: 2500, percentage: 25 },
        ]);
    });
});



