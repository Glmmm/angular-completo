import { Address } from './address.model';
import { Status } from './status.model';

export interface User {
  nome: string;
  email: string;
  senha: string;
  idade: number;
  endereco: Address;
  telefone: string;
  ativo: boolean;
  funcao: string;
  dataCadastro: string;
  status: Status;
}
