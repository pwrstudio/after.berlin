export function formatDateTime(dateTime: string) {

    // Create a new date object
    const myDate = new Date(dateTime);

    // MM/DD/YYYY
    const dateArray = myDate.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).split('/')

    // DD-MM-YYYY
    return `${dateArray[1]}-${dateArray[0]}-${dateArray[2]}`;
}