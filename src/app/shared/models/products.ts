export class Products {
  id: number;
  attribute_value_simple_product: any;
  category:any;
  created_at:Date;
  description:string;
  featured:number;  
  imagens: any;
  new:number;  
  pk:number;
  product_meta:any;
  short_description:string;
  simple_product:any;  
  sku: string;
  status:number;
  subcategory:any; 
  title: string;
  type:number;
  updated_at:Date;
  variations_product:any; 
  constructor() {
    this.description = '';
    this.featured = null;
    this.new = null;
    this.pk =  null;
    this.short_description = '';
    this.sku = '';
    this.status = null;
    this.title = '';
    this.type = null;
  }
}