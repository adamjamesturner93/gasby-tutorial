import React from "react"
import Layout from "../components/Layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import styles from "../components/products.module.css"
import Image from "gatsby-image"

const Products = ({ data }) => {
    const {
        allContentfulProduct: { nodes: products },
    } = data
    return (
        <Layout>
            <section className={styles.page}>
                {products.map(product => (
                    <article key={product.id}>
                        <Image
                            fluid={product.image.fluid}
                            alt={product.title}
                        />
                        <h3>
                            {product.title} <span>£{product.price}</span>
                        </h3>
                        <Link to={`/products/${product.slug}`}>
                            more details
                        </Link>
                    </article>
                ))}
            </section>
        </Layout>
    )
}

export const query = graphql`
    {
        allContentfulProduct {
            nodes {
                id
                title
                price
                slug
                image {
                    fluid {
                        ...GatsbyContentfulFluid
                    }
                }
            }
        }
    }
`

export default Products
