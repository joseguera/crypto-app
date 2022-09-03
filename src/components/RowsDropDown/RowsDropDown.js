import React from "react";
import { DropDownHolder, DropDown, DropDownTitle, CategoryTitle, ButtonText, Arrow, DropDownList, ListItem } from "./RowsDropDown.styles";

export default class RowsDropDown extends React.Component {
    state = {
      currentRowNumber: this.props.rowNumber,
      open: false,
    };

    rowNumbers = [ 10, 25, 50, 100 ];
  
    rowContainer = React.createRef();
  
    handleDropDownClick = () => {
      const { open } = this.state;
      this.setState({
        open: !open,
      });
    };
  
    handleSelection = (rows) => {
      const { open } = this.state;
      this.setState({
        currentRowNumber: rows,
        open: !open
      });
      this.props.setRowQuantity(rows);
    };
  
    handleClickOutside = (event) => {
      if (
        this.rowContainer &&
        !this.rowContainer.current.contains(event.target)
      ) {
        this.setState({
          open: false,
        });
      }
    };
  
    componentDidMount() {
      document.addEventListener("mousedown", this.handleClickOutside);
    }
    componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleClickOutside);
    }
  
    render() {
      const { open, currentRowNumber } = this.state;
      return (
        <>
          <div className="container" ref={this.rowContainer}>
            <DropDownHolder>
                <CategoryTitle><ButtonText>Show Rows:</ButtonText></CategoryTitle>
              <DropDown onClick={this.handleDropDownClick}>
                <DropDownTitle>{currentRowNumber}</DropDownTitle>
                {!open ? <Arrow /> : <Arrow style={{ "transform": "rotateX(180deg)" }} />}
              </DropDown>
              {open && (
                <DropDownList>
                    {this.rowNumbers.map((rowNumber) => {
                        return <ListItem key={rowNumber} id={rowNumber} onClick={() =>this.handleSelection(rowNumber)}>{rowNumber}</ListItem>
                    })}                  
                </DropDownList>
              )}
            </DropDownHolder>
          </div>
        </>
      );
    }
  }
  