import {render, screen} from "@testing-library/react"
import Header from ".."

test('Header renders correctly', ()=>{
    // Test edilmesini istediğimiz elementi render ediyoruz
    render(<Header/>);
    // header element içerisindeki texti get to know your favorite hero olan elementi değişkene atıyoruz
    const headerElement = screen.getByText(/get to know your favorite hero/i)
    expect(headerElement).toBeInTheDocument();
    // Elementin text içeriği beklendiği gibi mi sorgusuyla testimizi sürdürüyoruz 
    expect(headerElement).toHaveTextContent("Get To Know Your Favorite Hero");
})