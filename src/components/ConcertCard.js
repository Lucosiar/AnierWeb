const ConcertCard = ({ concert }) => {
    const { date, city, country, venue, ticketsUrl, status } = concert;
    const formattedDate = new Date(date).toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  
    const statusStyle =
      status === "soldout"
        ? "text-red-500 font-semibold"
        : status === "past"
        ? "text-gray-500 line-through"
        : "text-green-400";
  
    return (
      <div className="flex justify-between items-center border-b border-white/10 pb-4">
        <div>
          <p className="text-sm">{formattedDate}</p>
          <p className="text-lg font-medium">{venue} – {city}, {country}</p>
        </div>
        <div>
          {status === "available" ? (
            <a
              href={ticketsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition"
            >
              Comprar tickets
            </a>
          ) : (
            <span className={statusStyle}>
              {status === "soldout" ? "Agotado" : "Finalizado"}
            </span>
          )}
        </div>
      </div>
    );
  };
  
  export default ConcertCard;
  