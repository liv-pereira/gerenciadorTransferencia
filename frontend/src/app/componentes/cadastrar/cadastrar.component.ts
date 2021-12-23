
import { Component, OnInit } from '@angular/core';
import {Transferencia, TransferenciaService} from '../../servicos/transferencia.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  transferencia: Transferencia = {
    id_tranferencia: '',
    nomeClient: '',
    valor: '' ,
    contaCliente: ''


  }

  constructor(private TransferenciaService: TransferenciaService, private router: Router ) { }

  ngOnInit(): void {
  }

   adicionar(){
  //   //aqui deletemos o atributo id_transferencia pois esse atributo é criado de forma automática
     delete this.transferencia.id_tranferencia
  //   // nos fizermos a inserção na nova transferencia no banco de dados
    this.TransferenciaService.addTransferencia(this.transferencia).subscribe()

    this.router.navigate(['/inicio'])

   }

}
