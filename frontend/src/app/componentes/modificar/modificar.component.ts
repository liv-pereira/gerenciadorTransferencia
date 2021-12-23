import { Component, OnInit } from '@angular/core';
import {TransferenciaService, Transferencia } from '../../servicos/transferencia.service';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  transferencia: Transferencia = {
    id_tranferencia: '',
    nomeClient: '',
    valor: '',
    contaCliente: ''
  }

  constructor(private TransferenciaService: TransferenciaService,
    private router: Router, private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id_entrada = <any>this.ActivatedRoute.snapshot.params['id']
    console.log('id de entrada' + id_entrada)
    this.TransferenciaService.getUmaTransferencia(id_entrada).subscribe({
      next:(resultado)=> { console.log(resultado)
                this.transferencia = resultado},
        error:(erro) =>console.error(erro),
        complete:() => console.info('Transferencia encontrada!')
    })
  }
  modificar(){
    this.TransferenciaService.editTransferencia(this.transferencia.id_tranferencia, this.transferencia).subscribe({
      next: (resultado)=>
        console.log("transferencia editada com sucesso"),
        error:(erro) =>console.error(erro),
        complete:() => console.info('Edição completada com sucesso!')

    })
    this.router.navigate(['/inicio'])



}}
