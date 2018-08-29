export default function highlightText(value, arg) {
    var b = value.split(arg[arg.length - 1]).join('<span class="highlight">' + arg[arg.length - 1] + '</span>')
    if (arg.length > 1) {
        return this.highlightText(b, arg.slice(0, -1))
    }
    return b
}