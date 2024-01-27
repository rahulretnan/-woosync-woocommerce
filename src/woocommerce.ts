import axios, {AxiosInstance} from 'axios';
import Coupons from './coupons';
import Customers from './customers';
import Orders from './orders';
import OrderNotes from './order-notes';
import Refunds from './refunds';
import Products from './products';
import ProductVariations from './product-variations';
import ProductAttributes from './product-attributes';
import ProductAttributeTerms from './product-attribute-terms';
import ProductCategories from './product-categories';
import ProductShippingClasses from './product-shipping-classes';
import ProductTags from './product-tags';
import ProductReviews from './product-reviews';
import Taxes from './taxes';
import TaxClasses from './tax-classes';
import Settings from './settings';
import SettingOptions from './setting-options';
import PaymentGateways from './payment-gateways';
import ShippingZones from './shipping-zones';
import ShippingZoneLocations from './shipping-zone-locations';
import ShippingZoneMethods from './shipping-zone-methods';
import ShippingMethods from './shipping-methods';
import SystemStatuses from './system-status';
import SystemStatusTools from './system-status-tools';

type WooCommerceClientConfig = {
    baseUrl: string;
    consumerKey?: string;
    consumerSecret?: string;
    apiKey?: string;
};
export default class WoocommerceClient {
    coupons!: Coupons;
    customers!: Customers;
    orders!: Orders;
    orderNotes!: OrderNotes;
    refunds!: Refunds;
    products!: Products;
    productVariations!: ProductVariations;
    productAttributes!: ProductAttributes;
    productAttributeTerms!: ProductAttributeTerms;
    productCategories!: ProductCategories;
    productShippingClasses!: ProductShippingClasses;
    productTags!: ProductTags;
    productReviews!: ProductReviews;
    taxes!: Taxes;
    taxClasses!: TaxClasses;
    settings!: Settings;
    settingOptions!: SettingOptions;
    paymentGateways!: PaymentGateways;
    shippingZones!: ShippingZones;
    shippingZoneLocations!: ShippingZoneLocations;
    shippingZoneMethods!: ShippingZoneMethods;
    shippingMethods!: ShippingMethods;
    systemStatuses!: SystemStatuses;
    systemStatusTools!: SystemStatusTools;
    private readonly axiosInstance: AxiosInstance;
    private readonly wpAPI: string = 'wp-json';
    private readonly wcVersion: string = 'wc/v3';

    constructor({
                    baseUrl,
                    consumerKey,
                    consumerSecret,
                    apiKey,
                }: WooCommerceClientConfig) {
        if (!baseUrl) {
            throw new Error('Base Url is required');
        }

        this.axiosInstance = this.createAxiosInstance(
            baseUrl,
            apiKey,
            consumerKey,
            consumerSecret
        );

        this.initializeServices();
    }

    private createAxiosInstance(
        baseUrl: string,
        apiKey?: string,
        consumerKey?: string,
        consumerSecret?: string
    ): AxiosInstance {
        const baseApiUrl = `${baseUrl}/${this.wpAPI}/${this.wcVersion}/`;
        if (apiKey) {
            return axios.create({
                baseURL: baseApiUrl,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${apiKey}`,
                },
            });
        } else {
            if (!consumerKey || !consumerSecret) {
                throw new Error('Consumer Key and Consumer Secret are required');
            }
            return axios.create({
                baseURL: baseApiUrl,
                headers: {
                    'Content-Type': 'application/json',
                },
                auth: {
                    username: consumerKey,
                    password: consumerSecret,
                },
            });
        }
    }

    private initializeServices(): void {
        this.coupons = new Coupons(this.axiosInstance);
        this.customers = new Customers(this.axiosInstance);
        this.customers = new Customers(this.axiosInstance);
        this.orders = new Orders(this.axiosInstance);
        this.orderNotes = new OrderNotes(this.axiosInstance);
        this.refunds = new Refunds(this.axiosInstance);
        this.products = new Products(this.axiosInstance);
        this.productVariations = new ProductVariations(this.axiosInstance);
        this.productAttributes = new ProductAttributes(this.axiosInstance);
        this.productAttributeTerms = new ProductAttributeTerms(this.axiosInstance);
        this.productCategories = new ProductCategories(this.axiosInstance);
        this.productShippingClasses = new ProductShippingClasses(
            this.axiosInstance
        );
        this.productTags = new ProductTags(this.axiosInstance);
        this.productReviews = new ProductReviews(this.axiosInstance);
        this.taxes = new Taxes(this.axiosInstance);
        this.taxClasses = new TaxClasses(this.axiosInstance);
        this.settings = new Settings(this.axiosInstance);
        this.settingOptions = new SettingOptions(this.axiosInstance);
        this.paymentGateways = new PaymentGateways(this.axiosInstance);
        this.shippingZones = new ShippingZones(this.axiosInstance);
        this.shippingZoneLocations = new ShippingZoneLocations(this.axiosInstance);
        this.shippingZoneMethods = new ShippingZoneMethods(this.axiosInstance);
        this.shippingMethods = new ShippingMethods(this.axiosInstance);
        this.systemStatuses = new SystemStatuses(this.axiosInstance);
        this.systemStatusTools = new SystemStatusTools(this.axiosInstance);
    }
}
