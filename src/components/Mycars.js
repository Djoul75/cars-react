import { Component, Fragment } from 'react'
import Car from './Cars'

class Mycars extends Component {

  state = {
    voitures: [
      {name: 'Ford', color: 'red', year: 2000},
      {name: 'Mercedes', color: 'black', year: 2010},
      {name: 'Peugeot', color: 'green', year: 2021},
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

  getAge = (year) => {
    const now = new Date().getFullYear()
    const age = now - year

    let frenchYearStr = ''
    if (age === 1) {
      frenchYearStr = 'an'
    } else if (age > 1) {
      frenchYearStr = 'ans'
    }
    return `${age} ${frenchYearStr}`
  }

  render() {

      return (
          <Fragment>
              <h1>{this.state.titre}</h1>

              <button onClick={this.addTenYears}>+ 10 ans</button>

              <table className='carsTable'>

                <tr>
                  <th>Marque</th>
                  <th>Age</th>
                  <th>Couleur</th>
                </tr>

                {
                  this.state.voitures.map(({name, color, year}, index) => {
                    return(
                      <Fragment key={index}>
                        <Car nom={name} color={color} year={this.getAge(year)} />
                      </Fragment>
                    )
                  })
                }

              </table>

          </Fragment>


      )
  }
}

export default Mycars
