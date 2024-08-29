

export default function Map() {
    return (
        <div className="mx-auto relative w-full">
            <div className="xl:flex xl:flex-row-reverse xl:justify-between xl:items-center">
                <div className="h-[350px] mdx:h-[450px] xl:h-[620px] w-full xl:max-w-[950px] xl:max-h-[750px]">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1804.0640191323969!2d55.30726323929795!3d25.266277951561523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43e4158d75a1%3A0x352852e5ebff102d!2sCasiani%20Furs!5e0!3m2!1sru!2s!4v1723103423605!5m2!1sru!2s" width="100%" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="relative top-0 left-0 w-full h-full border-none " frameborder="0"></iframe>
                </div>
                <div className=" mx-[14px] 3xl:mx-auto">
                    <div className="mt-4 max-w-[2100px] slg:px-20 xl:mx-5">
                        <form className="flex flex-col space-y-4 xl:grid xl:gap-8">
                            <div className='xl:pb-[30px] border-b-2 border-contactBorder flex flex-col items-start gap-1 pb-3'>
                                <div>
                                    <p className="text-[14px] mdx:text-[18px] xl:text-[20px] text-[#BABABA]">Address</p>
                                </div>
                                <div>
                                    <a href="https://www.google.com/maps/search/?api=1&query=Deira,+Baniyas+road,+Twin+Towers,+20+floor+office+number+10" target="_blank" rel="noopener noreferrer" className="block text-black text-[20px] mdx:text-[28px] xl:text-[30px] mdx:w-[470px]">
                                        Deira, Baniyas road, Twin Towers, 20 floor office number 10
                                    </a>
                                </div>
                            </div>
                            <div className='xl:pb-[30px] border-b-2 border-contactBorder   flex flex-col gap-1 items-start pb-3'>
                                <div>
                                    <p className="text-[14px] mdx:text-[18px] xl:text-[20px] text-[#BABABA]">Phone</p>
                                </div>
                                <div>
                                    <a href="tel:+9710524979914" className="hover:underline text-black text-[20px] mdx:text-[28px] xl:text-[30px]">+9710524979914</a>
                                </div>
                            </div>
                            <div className='xl:pb-[30px] border-b-2 border-contactBorder flex flex-col gap-1 items-start pb-3 '>
                                <div>
                                    <p className="text-[14px] mdx:text-[18px] xl:text-[20px] text-[#BABABA]">Schedule</p>
                                </div>
                                <p className="text-black text-[20px] mdx:text-[28px] xl:text-[30px]">Open daily 09:00 - 18:00</p>
                            </div>
                            <div className='xl:pb-[30px] border-b-2 border-contactBorder flex flex-col gap-1 items-start pb-3 xl:border-b-0'>
                                <div>
                                    <p className="text-[14px] mdx:text-[18px] xl:text-[20px] text-[#BABABA]">E-mail</p>
                                </div>
                                <div>
                                    <a href="mailto:info@mrjtrade.ae" className="text-black text-[20px] mdx:text-[28px] xl:text-[30px]">info@mrjtrade.ae</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}