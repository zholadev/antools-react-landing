import React from 'react'
import './styles.sass'
import Container from './../Partials/Container'
import image from './../../helpers/images'
import Cards from './Cards/Cards'
import Partner from './Partner/Partner'

const data = [
  {
    id: 1,
    title: 'FIGMA',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    type: 'Free',
    logo: image.figmaIcon,
  },
  {
    id: 2,
    title: 'Sketch',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    type: 'Free & Paid',
    logo: image.sketchIcon,
  },
  {
    id: 3,
    title: 'Visual Studio Code',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    type: 'Free',
    logo: image.vsIcon,
  },
  {
    id: 4,
    title: 'Notion',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    type: 'Free & Paid',
    logo: image.notionIcon,
  },
  {
    id: 5,
    title: 'Slack',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    type: 'Free & Paid',
    logo: image.slackIcon,
  },
  {
    id: 6,
    title: 'Invision',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    type: 'Free & Paid',
    logo: image.invisionIcon,
  },
]

const Popluar = () => {
  return (
    <div className="popular-container">
      <Container>
        <div className="title">
          <h2>Most Popular Tools</h2>
          <p>
            Tools for the best Designers and Developers most popularly used in
            the world
          </p>
        </div>

        <div className="popular-cards">
          {data.map((item, id) => {
            return <Cards data={item} type="xs" key={id} />
          })}
        </div>

        <Partner />
      </Container>
    </div>
  )
}

export default Popluar
