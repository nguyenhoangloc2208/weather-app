// icon:icon-home | Heroicons UI https://github.com/sschoger/heroicons-ui | Steve Schoger

export function IconHome(props: React.SVGProps<SVGSVGElement>) {
    return(
        <svg 
            viewBox="0 0 24 24" 
            width="1em" 
            height="1em"
            {...props}
        >
            <path
                d="M13 20v-5h-2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7.59l-.3.3a1 1 0 1 1-1.4-1.42l9-9a1 1 0 0 1 1.4 0l9 9a1 1 0 0 1-1.4 1.42l-.3-.3V20a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm5 0v-9.59l-6-6-6 6V20h3v-5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v5h3z"
            />
        </svg>
    )
}