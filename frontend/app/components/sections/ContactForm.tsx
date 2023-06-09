export default function ContactForm() {
	return (
		<div className="ContactForm section / bg-prim-100 text-center / lg:p-[0]">
			<div className="Container / px-4 / sm:px-12 / md:flex md:justify-between md:gap-12 / lg:p-[120px] / xl:gap-4 xl:max-w-[1440px] xl:mx-auto xl:border-x-[0.4px] xl:border-neutrals-400">
				<h2 className="h h2 / mb-10 / xl:text-5xl">Fill in our form</h2>

				<form className="Form / w-full flex flex-col gap-4 / md:max-w-[588px]">
					<input
						id="name"
						type="text"
						placeholder="Name"
						className="Input / py-3 px-4 bg-neutrals-400 border-[1px] border-neutrals-600 rounded w-full font-paragraphs text-base leading-6 text-neutrals-1100 placeholder:text-neutrals-800 focus:border-neutrals-1100 focus-visible:border-neutrals-1100 focus-visible:outline-none / xl:text-xl xl:leading-7 xl:px-6 xl:py-4"
					/>
					<input
						id="email"
						type="email"
						placeholder="Email"
						className="Input / py-3 px-4 bg-neutrals-400 border-[1px] border-neutrals-600 rounded w-full font-paragraphs text-base leading-6 text-neutrals-1100 placeholder:text-neutrals-800 focus:border-neutrals-1100 focus-visible:border-neutrals-1100 focus-visible:outline-none / xl:text-xl xl:leading-7 xl:px-6 xl:py-4"
					/>
					<input
						id="subject"
						type="text"
						placeholder="Subject"
						className="Input / py-3 px-4 bg-neutrals-400 border-[1px] border-neutrals-600 rounded w-full font-paragraphs text-base leading-6 text-neutrals-1100 placeholder:text-neutrals-800 focus:border-neutrals-1100 focus-visible:border-neutrals-1100 focus-visible:outline-none / xl:text-xl xl:leading-7 xl:px-6 xl:py-4"
					/>
					<textarea
						id="message"
						placeholder="Message"
						className="Input / py-3 px-4 bg-neutrals-400 border-[1px] border-neutrals-600 rounded w-full font-paragraphs text-base leading-6 text-neutrals-1100 resize-none h-48 placeholder:text-neutrals-800 focus:border-neutrals-1100 focus-visible:border-neutrals-1100 focus-visible:outline-none / xl:text-xl xl:leading-7 xl:px-6 xl:py-4 xl:mb-4"
					/>

					<button
						type="submit"
						value="Submit"
						className="btn btn--primary / sm:w-min sm:whitespace-nowrap sm:px-10 / md:px-[100px]"
					>
						Send
					</button>
				</form>
			</div>
		</div>
	);
}
