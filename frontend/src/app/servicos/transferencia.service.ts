import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  url= 'http://localhost:3000/transferencias'

  constructor(private http:HttpClient) { }
  //listar todas as transferências que estão armazenadas no banco de dados
  getTransferencia(){
    return this.http.get(this.url)

  }

  //busca de uma transferencia
  getUmaTransferencia(id: any){
    return this.http.get(this.url + '/' + id)
  }
  //adiconar uma transferencia
  addTransferencia(transferencia: Transferencia){
    return this.http.post(this.url, transferencia)

  }
  //excluir uma transferencia
  deleteTransferencia (id:any) {
    return this.http.delete(this.url + '/' + id)
  }

  editTransferencia (id: any, transferencia: Transferencia) {
    return this.http.put(this.url + '/' + id, transferencia)

  }

}

//modelo que as transferencias vão utilizar
export interface Transferencia {
  id_tranferencia?: string
  nomeClient?: string
  valor?: string
  contaCliente?: string
}
