import React, { Component } from 'react';
import Main from './main.png';

class Home extends Component {
    render() {
        return (
			<>
            <main>
                <div className="main-text">
					<h2>Благодаря данному курсу вы освоите:</h2>
					<ul>
						<li>монтаж ip видеонаблюдения;</li>
						<li>монтаж AHD видеонаблюдения;</li>
						<li>настройку систем видеонаблюдения всех видов;</li>
						<li>монтаж кабелей в соответствии с ГОСТ.</li>
					</ul>
					
				</div>
				<img src={Main} alt="Main img"></img>

				
            </main>
			<h1 className="hero">Стань профессионалом своего дела.</h1>
			</>
        );
    }
}

export default Home;