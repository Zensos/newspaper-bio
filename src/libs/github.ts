function shuffle(array: []) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex > 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

export default async function github() {
    const github = await fetch('https://api.github.com/users/Zensos/repos').then(res => res.json()).then(res => res)
    let filter_: any = shuffle(github.filter((e: any) => e.fork == false))
    filter_.length = 3
    return filter_
}
