export default async function lanyard() {
    const response = await fetch('https://api.lanyard.rest/v1/users/502056862674452481').then(res => res.json()).then(res => res)
    return response
}