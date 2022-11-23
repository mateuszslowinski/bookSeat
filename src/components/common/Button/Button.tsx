interface Props {
    text: string
    onClick?: () => void
}

export const Button = ({text, onClick}: Props) => (
    <button
        className='button'
        onClick={onClick}
    >
        {text}
    </button>
)
