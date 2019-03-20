import { StaticQuery, graphql } from "gatsby";
import React from "react";


const Account = () => (
    <StaticQuery
      query={graphql`
query {
  allSocialAccountsYaml {
    edges {
      node {
        name
        label
        href
      }
    }
  }
}
`}
      render={data => <div>
                        {data.allSocialAccountsYaml
                         .edges.map(edge=>(<p>
                                             {edge.node.name}<br />
                                             <a href={edge.node.href}>{edge.node.label}</a><br />
                                           </p>
                                          ))
                        }
                      </div>}
    />
);

export default Account;
