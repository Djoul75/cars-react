import { Component } from 'react'
import Car from './Cars'

class Mycars extends Component {

  state = {
    voitures: [
      {name: 'Ford', color: 'red', year: 2000},
      {name: 'Mercedes', color: 'black', year: 2010},
      {name: 'Peugeot', color: 'green', year: 2018},
    ],
    titre: 'Mon Catalogue Voitures 2'
  }

  addTenYears = () => {

    const updatedState = this.state.voitures.map((param) => {
      return param.year -=10;
    })

    this.setState({
      updatedState
    })
  }

    render() {

        return (
            <div>
                <h1>{this.state.titre}</h1>

                <button onClick={this.addTenYears}>+ 10 ans</button>


                {
                  this.state.voitures.map(({name, color, year}, index) => {
                    return(
                      <div key={index}>
                        <Car nom={name} color={color} year={year} />
                      </div>
                    )
                  })
                }

            </div>

        )
    }
}

export default Mycars
