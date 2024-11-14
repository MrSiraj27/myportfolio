import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const client = sanityClient({

    projectId:"068ywazt",
    token:process.env.REACT_PROJECT_ID_TOKEN,
    useCdn:true,
    dataset:'production',
    apiVersion:"2022-02-01"
})



const builder = imageUrlBuilder(client);
export const urlFor =(source)=>builder.image(source)