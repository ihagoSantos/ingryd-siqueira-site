import './HomeSection.css'
import Image from 'next/image'
import {Button} from '@/components/Button/Button'
export const HomeSection = () => {
    return (
        <section className='home_container'>
            <div className='text_container'>
                <h1>Ingryd Siqueira</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus magna, dictum in dignissim nec, posuere nec tellus. Aliquam et lobortis turpis. Maecenas pellentesque justo sit amet vestibulum aliquet. Ut aliquam ullamcorper cursus.
                </p>
                <Button text="Agende sua consulta"/>
            </div>
            <div className='img_container'>
                <Image 
                    src="/ingryd-siqueira-1.png"
                    alt="Psicóloga Ingryd Siqueira"
                    width={1086}
                    height={1630}
                />
            </div>
        </section>
    )
}