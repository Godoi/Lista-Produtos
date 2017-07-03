export class Products {
  id: number;
  imagem: string;
  produto:string;
  preco:string;
  desconto:string;
  valor_des:string;
  descricao:string;
  categoria:string;
  
  constructor() {
     this.imagem =  '';
     this.produto = '';
     this.preco = '';
     this.desconto = '';
     this.valor_des = '';
     this.descricao = '';
     this.categoria = '';
  }
}