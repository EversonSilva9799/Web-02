import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../modelos/User';
import { UserService } from '../services/user.service';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: [ './signup.component.css' ]
})
export class SignupComponent implements OnInit {
	private user: User;

	meuForm = this.fb.group({
		firstName: [ '', Validators.required ],
		secondName: [ '', Validators.required ],
		email: [ '', [ Validators.required, Validators.email ] ],
		userPassword: [ '', Validators.required ]
	});

	constructor(private fb: FormBuilder, private userService: UserService) {}
	ngOnInit() {}

	public cadastrar() {
		this.user = this.meuForm.value;

		this.userService.cadastrar(this.user).subscribe((data) => {
			console.log(data);
		});
	}
}
