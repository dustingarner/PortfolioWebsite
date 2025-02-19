/*
Script for the index page of my portfolio website.

*/

function constructSvgAttributes(viewBox='inherit', width='inherit', height='inherit', focusable='inherit', ariaHidden='inherit'){
    this.viewBox = viewBox;
    this.width = width;
    this.height = height;
    this.focusable = focusable;
    this.ariaHidden = ariaHidden;
}

const svgAttributes = {
    'github': new constructSvgAttributes(viewBox='0 0 64 64', width='64', height='64', focusable=false, ariaHidden='true'),
    'linkedin': new constructSvgAttributes(viewBox='0 0 64 64', width='64', height='64', focusable=false, ariaHidden='true'),
    'godot': new constructSvgAttributes(viewBox='36 28 335 335', width='64', height='64')
};

function createElement(tag, attributes){
    const element = document.createElement(tag);
    for(const [key, value] of Object.entries(attributes)){
        element.setAttribute(key, value);
    }
    return element;
}

function createLink(link, _id='', _class=''){
    return createElement('a', {
        'href': link,
        'id': _id,
        'class': _class
    });
}

function createSvgElement(type, attributes){
    if(typeof(type) != 'string' || (type !== 'svg' && type !== 'path' && type !== 'g')){
        console.log('type must be \'svg\' or \'path\'.');
    }
    const element = document.createElementNS('http://www.w3.org/2000/svg', type);
    for(const [key, value] of Object.entries(attributes)){
        element.setAttribute(key, value);
    }
    return element;
}

function createSvgPath(shape, fill='', strokeWidth='', transform=''){
    return createSvgElement('path', {
        'd': shape,
        'fill': fill,
        'stroke-width': strokeWidth,
        'transform': transform
    });
}

function createSvgGroup(fill='', strokeWidth=''){
    return createSvgElement('g', {
        'fill': fill,
        'stroke-width': strokeWidth
    });
}

function getSvgIcon(iconType){
    const iconAttributes = svgAttributes[iconType];
    const svgElement = createSvgElement('svg', {
        'xmlns': 'http://www.w3.org/2000/svg',
        'viewBox': iconAttributes.viewBox,
        'width': iconAttributes.width,
        'height': iconAttributes.height,
        'focusable': iconAttributes.focusable,
        'aria-hidden': iconAttributes.ariaHidden
    });
    switch(iconType){
        case 'github':
            svgElement.appendChild(createSvgPath(shape='M32 1.8c-17 0-31 13.8-31 31C1 46.4 9.9 58 22.3 62.2c1.6.3 2.1-.7 2.1-1.4s0-2.7-.1-5.4c-8.6 2-10.4-4.2-10.4-4.2-1.4-3.5-3.5-4.5-3.5-4.5-2.8-2 .1-2 .1-2 3.1.1 4.8 3.2 4.8 3.2 2.7 4.8 7.3 3.4 9 2.5.3-2 1.1-3.4 2-4.2-6.8-.7-14.1-3.4-14.1-15.2 0-3.4 1.3-6.1 3.2-8.2-.3-.7-1.4-3.9.3-8.2 0 0 2.7-.8 8.6 3.2 2.5-.7 5.1-1.1 7.8-1.1s5.4.3 7.8 1.1c5.9-3.9 8.5-3.2 8.5-3.2 1.7 4.2.7 7.5.3 8.2 2 2.1 3.2 4.9 3.2 8.2 0 11.8-7.3 14.5-14.1 15.2 1.1 1 2.1 3 2.1 5.8 0 4.2-.1 7.5-.1 8.5 0 .8.6 1.7 2.1 1.4C54.1 57.8 63 46.3 63 32.6c-.1-17-14-30.8-31-30.8z',
                fill='white'));
            break;
        case 'linkedin':
            svgElement.appendChild(createSvgPath(shape='M58.5 1H5.6C3.1 1 1.1 3 1.1 5.5v53c0 2.4 2 4.5 4.5 4.5h52.7c2.5 0 4.5-2 4.5-4.5V5.4C63 3 61 1 58.5 1zM19.4 53.7h-9.1V24.2h9.1v29.5zm-4.6-33.6c-3 0-5.3-2.4-5.3-5.3s2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3-2.2 5.3-5.3 5.3zm39.1 33.6h-9.1V39.4c0-3.4-.1-7.9-4.8-7.9-4.8 0-5.5 3.8-5.5 7.6v14.6h-9.1V24.2h8.9v4.1h.1c1.3-2.4 4.2-4.8 8.7-4.8 9.3 0 11 6 11 14.2v16h-.2z',
                fill='white'));
            break;
        case 'godot':
            const outerGroup = createSvgGroup(fill='#fff');
            svgElement.appendChild(outerGroup);
            outerGroup.appendChild(createSvgPath(shape='m181.9082 48.951172c-15.35819 3.414273-30.55119 8.168521-44.79492 15.33789.32574 12.577316 1.13879 24.628133 2.78711 36.869138-5.5316 3.54397-11.34506 6.58567-16.51172 10.73438-5.2496 4.03861-10.61179 7.90171-15.36523 12.625-9.496329-6.28112-19.545975-12.18414-29.900393-17.39453C66.96181 119.13483 56.525128 132.09977 48 146.60742c6.699845 10.51682 13.885852 21.08679 20.541016 29.33008v71.6543 9.10156 8.2832c.162871.00107.326917.00634.488281.02149l54.585933 5.26367c2.85931.27598 5.09977 2.57801 5.29883 5.44336l1.6836 24.0957 47.61523 3.39844 3.2793-22.24024c.42528-2.88343 2.8998-5.02148 5.8164-5.02148h57.58985c2.9151.0 5.38918 2.13805 5.81445 5.02148l3.2793 22.24024 47.61719-3.39844 1.68164-24.0957c.20057-2.86535 2.43953-5.16588 5.29882-5.44336l54.56446-5.26367c.16136-.01504.32348-.01999.48632-.02149v-7.10547l.02344-.00586V175.9375c7.68652-9.6765 14.96452-20.34983 20.54102-29.33008-8.52211-14.50765-18.96376-27.47259-30.125-39.48437-10.35139 5.21039-20.40601 11.11341-29.90235 17.39453-4.75192-4.72329-10.10418-8.58639-15.36132-12.625-5.16515-4.14871-10.98676-7.19041-16.50782-10.73438 1.64381-12.241005 2.45791-24.291822 2.78516-36.869138-14.24524-7.169369-29.437-11.923617-44.80273-15.33789-6.13484 10.310684-11.74472 21.477157-16.63086 32.392578-5.79402-.968181-11.61467-1.327114-17.44336-1.396484V79.9375c-.04075.0-.07858.009766-.11328.009766-.03616.0-.07516-.009766-.11133-.009766v.009766c-5.83926.069365-11.65565.428303-17.45117 1.396484-4.88314-10.915421-10.48893-22.081894-16.63282-32.392578zM138.72266 179.20312c18.16924.0 32.89648 14.7157 32.89648 32.87891.0 18.17528-14.72724 32.89844-32.89648 32.89844-18.1602.0-32.89063-14.72316-32.89063-32.89844.0-18.16321 14.73043-32.8789 32.89063-32.87891zm154.76367.0c18.15868.0 32.88672 14.7157 32.88672 32.87891.0 18.17528-14.72804 32.89844-32.88672 32.89844-18.17227.0-32.89844-14.72316-32.89844-32.89844.0-18.16321 14.72617-32.87891 32.89844-32.87891zm-77.38672 19.24024c5.8483.0 10.59961 4.31463 10.59961 9.62305v30.2832c0 5.31294-4.75131 9.62305-10.59961 9.62305s-10.58789-4.31011-10.58789-9.62305v-30.2832c0-5.30842 4.73959-9.62305 10.58789-9.62305z',
                    fill='inherit', strokeWidth='1.50807', transform='scale(.93749999)'));
            const innerGroup = createSvgGroup(strokeWidth='1.41382');
            outerGroup.appendChild(innerGroup);
            innerGroup.appendChild(createSvgPath('m295.00412 263.89328-1.58489 22.71014c-.19086 2.73715-2.36814 4.91584-5.10529 5.11236l-54.50971 3.88941c-.1329.01-.2658.0141-.39728.0141-2.70888.0-5.04592-1.98783-5.44603-4.70801l-3.12595-21.19877h-44.47726l-3.12595 21.19877c-.41991 2.85308-2.97043 4.90453-5.84331 4.69387l-54.50971-3.88941c-2.73715-.19652-4.91442-2.37521-5.10529-5.11236l-1.58489-22.71014-46.015498-4.43656c.02121 4.94553.08483 10.36328.08483 11.44202.0 48.59854 61.649488 71.95763 138.244428 72.22625h.0933.0947c76.59494-.26862 138.22322-23.62771 138.22322-72.22625.0-1.09853.0664-6.49366.0891-11.44202z'));
            innerGroup.appendChild(createSvgPath('m153.47185 200.6558c0 11.30205-9.16012 20.46217-20.47065 20.46217-11.30488.0-20.47066-9.16012-20.47066-20.46217s9.16578-20.47065 20.47066-20.47065c11.31053.0 20.47065 9.1686 20.47065 20.47065'));
            innerGroup.appendChild(createSvgPath('m251.72267 200.6558c0 11.30205 9.15729 20.46217 20.45934 20.46217 11.31337.0 20.47066-9.16012 20.47066-20.46217s-9.15729-20.47065-20.47066-20.47065c-11.30205.0-20.45934 9.1686-20.45934 20.47065'));
        default:

    }
    return svgElement;
}

function addSvgIcons(){
    const iconTypes = ['godot', 'github', 'linkedin'];
    for(const i of iconTypes){
        const elements = document.getElementsByClassName(`svg-${i}`);
        for(const j of elements){
            j.appendChild(getSvgIcon(i));
            console.log(j);
        }
    }
}

openCategory = (_event, categoryName) => {
    console.log(categoryName);
}

const portfolioItems = {
    'Oasis': {

    }
}

function init(){
    console.log(svgAttributes);
    addSvgIcons();
}

init();


