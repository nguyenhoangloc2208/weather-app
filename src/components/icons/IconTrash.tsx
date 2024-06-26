// icon:icon-trash | Heroicons UI https://github.com/sschoger/heroicons-ui | Steve Schoger

export default function IconTrash(props: React.SVGProps<SVGSVGElement>) {
    return(
        <svg 
            viewBox="0 0 24 24" 
            width="1em" 
            height="1em"
            {...props}
        >
            <path d="M8 6V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2h5a1 1 0 0 1 0 2h-1v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8H3a1 1 0 1 1 0-2h5zM6 8v12h12V8H6zm8-2V4h-4v2h4zm-4 4a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1z"/>
            </svg>
    )
}