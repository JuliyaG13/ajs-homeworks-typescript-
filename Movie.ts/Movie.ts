class Movie {
    title: string;
    year: number;
    country: string;
    slogan: string;
    genre: string[];
    duration: number;

    constructor(
        title: string,
        year: number,
        country: string,
        slogan: string,
        genre: string[],
        duration: number
    ) {
        this.title = title;
        this.year = year;
        this.country = country;
        this.slogan = slogan;
        this.genre = genre;
        this.duration = duration;
    }

    getInfo(): string {
        const genreList = this.genre.join(', '); 
        return `${this.title}. Год: ${this.year}, Страна: ${this.country}, Слоган: "${this.slogan}", Жанр: ${genreList}. Время: ${this.duration} минут.`;
    }
}

const avengers = new Movie(
    "Мстители",
    2012,
    "США",
    "Avengers Assemble!",
    ["фантастика", "боевик", "фэнтези", "приключения"],
    137
);

console.log(avengers.getInfo());