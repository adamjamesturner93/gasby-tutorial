import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
    {
        site {
            info: siteMetadata {
                author
                data
                description
                title
                person {
                    age
                    name
                }
            }
        }
    }
`

const Header = () => {
    const {
        site: {
            info: {
                title,
                person: { name, age },
            },
        },
    } = useStaticQuery(getData)

    return (
        <div>
            <h2>title: {title}</h2>
            <h2>name: {name}</h2>
        </div>
    )
}

export default Header
