import axios from 'axios'
import React,{useState} from 'react'

import './login.css'


const inicioSesion = () => {
	// Inicio de sesión
	const [inicioSesion, setSesion] = useState({
		email: '',
		password: ''
	});

	const manejarEntradaSesion = (e)=>{
		const {name, value} = e.target;
		setSesion({
			...inicioSesion,
			[name]: value,
		});
	};

	const manejarInicioSesion = (e)=>{
		e.preventDefault();
		axios
		.post('http://localhost:3000/api/auth/login',inicioSesion)
		.then((response) => {
			console.log('Inicio sesión correctamente')
			if(!response.success) {
				window.location.href='/';
			}
		})
		.catch((err) => console.log('Error al iniciar sesión',err));
	}

	// Crear usuario
	const [formData,setFormData] =useState({
		email:'',
		password:'',
		fullName:'',
		isActive: true,
		roles:'user'

	});

	const manejarEntrada = (e) => {
		const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
	const mandarFormulario = (e) => {
		e.preventDefault();
		axios
		.post('http://localhost:3000/api/auth/register',formData)
		.then((response) => {
			console.log('usuario creado correctamente')
			if(!response.success) {
				window.location.href='/';
			}
		})
		.catch((err) => console.log('Error al crear el usuario',err));
	};
  return (
    <div className='cuerpo'>	
		<div className="section flex items-center justify-center">
			<div className="container sh">
				<div className="row full-height justify-content-center">
					<div className="col-12 text-center align-self-center py-5">
						<div className="section pb-5 pt-5 pt-sm-2 text-center">
							<h6 className="mb-0 pb-3 text-xl"><span>Log In </span><span>Sign Up</span></h6>
				          	<input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
				          	<label for="reg-log"></label>
							<div className="card-3d-wrap mx-auto">
								<div className="card-3d-wrapper shadow-2xl">
									<div className="card-front">
										<div className="center-wrap">
											<form className="section text-center" id='form1' onSubmit={manejarInicioSesion} >
												<h4 className="mb-4 pb-3 text-3xl font-medium">Log In</h4>
												<div className="form-group">
													<input 
													type="email"
													name="email"
													value={inicioSesion.email}
													onChange={manejarEntradaSesion}
													className="form-style"
													placeholder="Email"
													id="email-R"
													autoComplete="off"
													/>
													<i className="input-icon uil uil-at"></i>
												</div>	
												<div className="form-group mt-2">
													<input 
													type="password"
													name="password"
													value={inicioSesion.password}
													onChange={manejarEntradaSesion}
													className="form-style"
													placeholder="Password"
													id="password"
													autoComplete="off"
													 />
													<i className="input-icon uil uil-lock-alt"></i>
												</div>
												<button className='font-medium bg-[#8F2C02] text-white py-2 px-7 mt-8 rounded-lg hover:bg-[#ffeba7] hover:text-black'>Log In</button>
    	                        				<p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>

												<p className='w-40 text-center m-auto text-red-500' id='warnings'></p>
					      					</form>
				      					</div>
				      				</div>
									<div className="card-back">
										<div className="center-wrap">
											<form className="section text-center" id='form2' onSubmit={mandarFormulario}>
												<h4 className="mb-4 pb-3 text-xl">Sign Up</h4>
												<div className="form-group">
													<input 
													type="email"
													name="email"
													value={formData.email}
													onChange={manejarEntrada}
													className="form-style"
													placeholder="Email"
													id="email-R"
													autoComplete="off"
													/>
													
													<i className="input-icon uil uil-user"></i>
												</div>	
												<div className="form-group my-2">
													<input
													type="password"
													name="password"
													value={formData.password}
													onChange={manejarEntrada}
													className="form-style"
													placeholder="Contraseña"
													id="lastName-R"
													autoComplete="off"
													/>
													<i className="input-icon uil uil-user"></i>
												</div>	
												<div className="form-group mt-2">
													<input 
													type="text"
													name="fullName"
													value={formData.fullName}
													onChange={manejarEntrada}
													className="form-style"
													placeholder="Nombre Completo"
													id="email-R"
													autoComplete="off"
													/>
													<i className="input-icon uil uil-at"></i>
												</div>	
												<button className='font-medium bg-[#8F2C02] text-white py-2 px-7 mt-8 rounded-lg hover:bg-[#ffeba7] hover:text-black'>Registrarse</button>
					      					</form>
				      					</div>
				      				</div>
				      			</div>
				      		</div>
				      	</div>
			      	</div>
		      	</div>
		    </div>
		</div>
    </div>
  )
}

export default inicioSesion

