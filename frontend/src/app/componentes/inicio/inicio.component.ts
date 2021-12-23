
import { Component, OnInit } from '@angular/core';
import{TransferenciaService, Transferencia} from '../../servicos/transferencia.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  ListarTransferencia: Transferencia []

  constructor(private TransferenciaService: TransferenciaService, private router: Router) {
    this.ListarTransferencia = []
   }

  ngOnInit(): void {
    this.listarTransferencia()
  }
  listarTransferencia(){
    this.TransferenciaService.getTransferencia().subscribe({
      next: (resultado) => {console.log(resultado)
        //esse ListarTransferencia aqui tem que ser maiusculo
                      this.ListarTransferencia = <any>resultado},
      error: (erro) => console.error(erro),
      complete: () => console.info('complete')
  } )
  }

  //função para excluir
  excluir(id:any){
    this.TransferenciaService.deleteTransferencia(id).subscribe({
      next: (resultado) => {console.log("Transferencia excluída")
                            this.listarTransferencia()},
    error:(erro) => console.error(erro),
    complete: ()=> console.info('Processo de exclusão foi finalizado')

    })
  }
  editar(id: any){
    this.router.navigate(['/editar/' + id])
  }

}
