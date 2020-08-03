import React, { Component } from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

export default class Table extends Component {
  render() {
    const { columns, sortColumn, onSort, data } = this.props;

    return (
      <table className="table mt-4">
        <TableHeader
          columns={columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody data={data} columns={columns} />;
      </table>
    );
  }
}
