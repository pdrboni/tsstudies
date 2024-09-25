// Singleton: nesse padrão de projeto, vc cria apenas uma instancia da classe. Se vc tentar criar mais de uma instancia, a instância excessiva retornará a instancia já criada.

export class Database{

  private static database: Database;

  private constructor(
    private host:string,
    private username:string,
    private password:string
  ) {}

  connect(): void {
    console.log(`Conectando: ${this.host}, ${this.username}, ${this.password}`)
  }

  static getDatabase(
    host:string,
    username:string,
    password:string
  ): Database {

    if(Database.database) return Database.database;
    Database.database = new Database(
      host,
      username,
      password)
    return Database.database;
  }
}

const database1 = Database.getDatabase('local', 'foo', '123456');
database1.connect();

const database2 = Database.getDatabase('local', 'fo222o', '123456');
database2.connect();

console.log(database1 === database2);
