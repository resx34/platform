import React, { Component } from 'react';
import Checkbox from './CheckBox';
import Button from '@material-ui/core/Button';

const items = [
  'Бело-оранжевый, оранжевый, бело-зеленый, синий, бело-синий, зеленый,бело-коричневый, коричневый',
  'Бело-зеленый, синий, бело-синий, зеленый, бело-коричневый, коричневый, бело-оранжевый',
  'Бело-коричневый, коричневый, бело-оранжевый, бело-зеленый, синий, бело-синий, зеленый',
  'Бело-оранжевый, оранжевый, бело-зеленый, синий, бело-синий, коричневый, зеленый,бело-коричневый'
];

class Application extends Component {
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }

//   handleFormSubmit = formSubmitEvent => {
//     formSubmitEvent.preventDefault();

//     for (const checkbox of this.selectedCheckboxes) {
//       console.log(checkbox, 'is selected.');
//     }
//   }

    handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    for (const checkbox of this.selectedCheckboxes) {
      if (checkbox === "Бело-оранжевый, оранжевый, бело-зеленый, синий, бело-синий, зеленый,бело-коричневый, коричневый") {
        alert("правильный ответ");
      } else {
        alert('ответ неверный')
      }
    }
  }

  createCheckbox = label => (
    <Checkbox
            label={label}
            handleCheckboxChange={this.toggleCheckbox}
            key={label}
        />
  )

  createCheckboxes = () => (
    items.map(this.createCheckbox)
  )

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">

            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}

              <Button variant="contained" type="submit">Ответить</Button>
            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default Application;