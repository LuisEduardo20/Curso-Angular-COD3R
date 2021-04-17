import { Product } from './../product-model';
import { ProductService } from './../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product

  constructor(private router: Router, private productservice: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productservice.readById(id).subscribe(product => {
      this.product = product
    })
  }

  deleteProduct(): void { 
    const id = this.route.snapshot.paramMap.get('id')
    this.productservice.delete(this.product.id).subscribe(() => {
      this.productservice.showMessage("Produto excluido com sucesso");
      this.router.navigate(['/products']);
    })
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
