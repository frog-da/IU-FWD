import { formatDistanceToNow } from 'date-fns';
import { enUS } from 'date-fns/locale';

interface Comic {
    day: string,
    month: string,
    year: string,
    num: number,
    link: string,
    news: string,
    safe_title: string,
    transcript: string,
    alt: string,
    img: string,
    title: string
}

export async function fetchComic() {
    const comicEl = document.getElementById('comic') as HTMLElement
    const email = new URLSearchParams([['email', 'd.tomilovskaia@innopolis.university']])
    const idResponse = await fetch('https://fwd.innopolis.app/api/hw2?' + email.toString())
    const id: string = await idResponse.json()
    const params = new URLSearchParams([['num', id.toString()]])
    const comicResponse = await fetch('https://getxkcd.vercel.app/api/comic?' + params.toString())
    const comicData: Comic = await comicResponse.json()
    comicEl.innerHTML = ''
    var img = document.createElement('img')
    img.src = comicData.img
    img.alt = comicData.alt
    var heading = document.createElement('h2')
    heading.textContent = comicData.title
    var dateEl = document.createElement('div')
    var dateAGO = document.createElement('div')
    const uploadedDate = new Date(parseInt(comicData.year), parseInt(comicData.month) - 1, parseInt(comicData.day))
    dateEl.textContent = 'Uploaded: ' + uploadedDate.toLocaleDateString()
    const formattedDistance = formatDistanceToNow(uploadedDate, { locale: enUS })
    dateAGO.textContent = 'Uploaded: ' + formattedDistance + ' ago'
    comicEl.appendChild(heading)
    comicEl.appendChild(img)
    comicEl.appendChild(dateEl)
    comicEl.appendChild(dateAGO)
}