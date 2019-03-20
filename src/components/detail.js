import { StaticQuery, graphql } from "gatsby";
import React from "react";


const Detail = () => (
    <StaticQuery
      query={graphql`
query {
  allDetailYaml {
    edges {
      node {
        name
        desc
      }
    }
  }
}
`}
      render={data => <div>
                        {data.allDetailYaml
                         .edges.map(edge=>(<div>
                                             <h3>{edge.node.name}</h3>
                                             <p>{edge.node.desc}</p>
                                           </div>))
                        }
                      </div>}
    />
);

export default Detail;
