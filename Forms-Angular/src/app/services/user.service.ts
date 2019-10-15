import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../modelos/User';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	private baseURL = 'http://localhost:3333';

	constructor(private http: HttpClient) {}

	public showUsers(): Observable<User[]> {
		return this.http.get<User[]>(`${this.baseURL}/users`);
	}

	public show(id: number): Observable<User> {
		return this.http.get<User>(`${this.baseURL}/users/${id}`);
	}

	public cadastrar(user: User): Observable<User> {
		return this.http.post<User>(`${this.baseURL}/users`, user);
	}

	public editar(user: User, id: number): Observable<User> {
		return this.http.put<User>(`${this.baseURL}/users/${id}`, user);
	}

	public deletar(id): Observable<User> {
		return this.http.delete<User>(`${this.baseURL}/users/${id}`);
	}
}
