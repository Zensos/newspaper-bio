export default function parser(value: string) {
    if (value.toLowerCase() == 'html') {
        return 'html5'
    } else {
        return value.toLowerCase()
    }
}