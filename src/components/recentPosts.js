import React from 'react';
import {Link} from 'gatsby';
import { useStaticQuery,graphql } from 'gatsby'

const RecentPosts = () => {
    const postData = useStaticQuery(graphql`
    {
      allMarkdownRemark(limit: 3, filter: {fileAbsolutePath: {regex: "/posts/"}}) {
        nodes {
            frontmatter {
              postSlug
              postTitle
              postDescription
              categories
              date
            }
          }
      }
    }
  `)

  return (
    <>
    <div className="dark:bg-bgDark bg-dark h-48 w-full relative -skew-y-6 lg:mt-8"></div>
     <div className="dark:bg-bgDark bg-dark w-full h-full text-center pt-64 pb-20 -mt-20">
                <div className="flex flex-col justify-center items-center mx-auto">
                  <h2 className="section-heading w-auto text-4xl tracking-wide font-bold text-white">Recent Posts</h2>
                </div>

        <div className="flex flex-col xl:w-3/4 items-center gap-4 mt-12 mx-auto p-4" style={{marginBottom: '-4rem'}}>
        
        {postData.allMarkdownRemark.nodes.map((post) => {
          const {postSlug, postTitle, postDescription, categories, date} = post.frontmatter;
          
          return (
            <>
          {postSlug &&
        <Link to={"/blog/" + postSlug} state={{postSlug: postSlug,}} className="card-post flex flex-col leading-snug p-4 rounded-sm border-2 border-secondary hover:border-darkPrimary hover:scale-105 text-white text-left" tabIndex="0" key={postSlug}>
          <p className="text-white65 italic mx-4 text-base tracking-wide">{date}</p>
          <h3 className="my-2 mx-4 font-bold text-xl">{postTitle}</h3>
          
            <p className="text-white65 my-2 mx-4">{postDescription}</p>
          <div className="flex gap-2 justify-between items-center my-4 mx-4">
            {categories &&
            <>
            <div className="flex flex-wrap w-1/2 lg:w-auto gap-2">
                {categories.map((category) => (
                    <>
                    <span className="tag text-darkPrimary border-2 border-darkPrimary py-1 px-2 rounded-md font-semibold text-sm">{category}</span>
                </>
                ))}
                </div>
                </>
              }

               <p className="text-white85 link lg:pr-4 text-base font-bold font-mono">Read More</p>  
          </div>
        
        </Link>
       
            }
            </>
            )
})}
</div>
  </div>
  <div className="flex justify-center bg-dark dark:bg-bgDark pb-20 mx-auto">
    <Link to="/blog" className="font-mono bg-secondary  hover:brightness-125 hover:scale-105 hover:text-large text-white font-semibold rounded shadow-md py-2 px-4 m-6 transition duration-500 focus:ring-2 focus:ring-highlight tracking-tight">View All</Link>
  </div>
  </>
  )
                }


export default RecentPosts;
