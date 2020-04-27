import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { UsuarioLoginModel } from '../../_models/usuario-login-model';
// key that is used to access the data in local storageconst STORAGE_KEY = 'local_todolist';
@Injectable()
export class LocalStorageService {
     anotherTodolist = [];
     constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }
     
     
     public storeOnLocalStorage(taskTitle: string): void {
          
          // get array of tasks from local storage
          const currentTodoList = this.storage.get('local_todolist') || [];
          // push new task to array
          currentTodoList.push({
              title: taskTitle,
              isChecked: false 
          });
          // insert updated array to local storage
          this.storage.set('local_todolist', currentTodoList);
          console.log(this.storage.get('local_todolist') || 'LocaL storage is empty');
     }

     public storeUsuarioAutorizacao(usuario: UsuarioLoginModel): void{
        this.storage.set('usuario_storage', usuario);
        console.log(this.storage.get('usuario_storage') || 'LocaL storage is empty');
     }

     public verificarUsuarioLogado(): UsuarioLoginModel{
        const usuario = <UsuarioLoginModel> this.storage.get('usuario_storage') || null;
        return usuario;
     }
}