import { Injectable } from "@nestjs/common";
import { Livro } from "./livro.model";

@Injectable()
export class LivrosService{

    livros: Livro[] = [
        // new Livro('LIV01', "livro 1", 29.90),
        // new Livro('LIV02', "livro 2", 29.90),
        // new Livro('LIV03', "livro 3", 29.90)
    ]

    obterTodos(): Livro[]{
        return this.livros;
    }

    obterUm(id: number): Livro{
        return this.livros[0];
    }

    criar(livro: Livro): void {
        this.livros.push(livro);
    }

    alterar(livro: Livro): Livro {
        return livro;
    }

    apagar(id: number): void {
        this.livros.pop();
    }
}