import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { Observable, Subject } from 'rxjs';

export class BaseMessages{
    constructor(protected toastr: ToastrService){

    }
      emiteToastrSucess(titulo: string, mensagem: string){
        this.toastr.success(mensagem, titulo);
      }
  
      emiteToastrInfo(titulo: string, mensagem: string){
        this.toastr.info(mensagem, titulo);
      }
  
      emiteToastrErro(titulo: string, mensagem: string){
        this.toastr.error(mensagem, titulo);
      }

      exibirErro(titulo: string, erro: string){
        Swal.fire({
            title: titulo,
            html: erro,
            icon: 'error',
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancelar'
          });
      }

      exibeMensagemDeConfirmacaoEdicao(): Observable<boolean>{
        let subjectRetorno$ = new Subject<boolean>();

        Swal.fire({
          title: "Confirma REALMENTE a alteração dos dados ?",
          text: '',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Confirmar',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
            subjectRetorno$.next(result.value);
        })

        return subjectRetorno$.asObservable();
      }
      exibeMsgCustomDeConfirmacaoEdicao(mensagem: string): Observable<boolean>{

        let subjectRetorno$ = new Subject<boolean>();
        let retorno = false;

        Swal.fire({
          title: mensagem,
          text: '',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Confirmar',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
            subjectRetorno$.next(result.value);
        })

        return subjectRetorno$.asObservable();

        ;
      }

      conjAcao(acao: string): string{
        if (acao.toLowerCase() == "remover")
            return "removido";
        if (acao.toLowerCase() == "editar")
            return "editado";
        if (acao.toLowerCase() == "cadastrar")
            return "cadastrado";
        if (acao.toLowerCase() == "inativar")
            return "inativado";
        if (acao.toLowerCase() == "ativar")
            return "ativado";

        return "nao identificado";
    }
}