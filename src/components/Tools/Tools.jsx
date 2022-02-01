import React from 'react'
import Container from '../Partials/Container'
import './styles.sass'
import image from '../../helpers/images'
import Cards from '../Popular/Cards/Cards'

const data = [
  {
    id: 1,
    title: 'Zeplin',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    type: 'Free',
    logo: image.zeplinIcon,
  },
  {
    id: 2,
    title: 'PHPStorm',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    type: 'Free',
    logo: image.phpStormIcon,
  },
  {
    id: 3,
    title: 'Toolbox',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    type: 'Free',
    logo: image.toolBoxicon,
  },
  {
    id: 4,
    title: 'Procreate',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    type: 'Free',
    logo: image.proCreateIcon,
  },
]

const Tools = () => {
  return (
    <div className="tools-container">
      <Container>
        <div className="tools-box">
          <div className="left-section">
            <h3 className="title">Newcomer Tools</h3>

            <p>
              Wow! see the latest update of the most recommended tools from
              reliable designers and developers
            </p>

            <button className="btn btn-primary">Explore more</button>
          </div>

          <div className="right-section">
            <div className="tools-list">
              {data.map((item, id) => {
                return <Cards data={item} key={id} />
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Tools
