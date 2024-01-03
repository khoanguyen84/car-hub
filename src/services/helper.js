export const generateCarImage = (car, angle = undefined) => {
    let url = new URL('https://cdn.imagin.studio/getimage')
    url.searchParams.append('customer', 'hrjavascript-mastery')
    url.searchParams.append('make', car?.make)
    url.searchParams.append('modelFamily', car?.model.split(' ')[0])
    url.searchParams.append('modelYear', 'car?.year')
    url.searchParams.append('angle', angle);

    return url
}