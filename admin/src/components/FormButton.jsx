function FormButton({ text, isLoading }) {
    return (
        <button
            type="submit"
            disabled={isLoading}
            className={`bg-[#FCB116] hover:bg-[#661111] p-3 rounded-3xl w-[80%] text-black hover:text-white text-lg md:text-xl transition-all duration-300 ease-in-out transform ${isLoading ? "opacity-70 cursor-not-allowed" : "hover:scale-105 hover:shadow-lg"}`}
        >
            {isLoading ? (
                <div className="flex items-center gap-2">
                    <div className="animate-spin border-t-2 border-b-2 border-black rounded-full w-5 h-5 text-center"></div>
                    Signing in...
                </div>
            ) : (
                text
            )}
        </button>
    );
}
export default FormButton;