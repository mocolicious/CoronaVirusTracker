import { Component, OnInit, AfterViewInit, ChangeDetectorRef, HostListener, Input } from '@angular/core';
import { D3Service } from 'src/app/services/d3.service';
import { ForceDirectedGraph, Link, Node } from 'src/app/models/d3';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit, AfterViewInit {
  @Input('nodes') nodes: Node[];
  @Input('links') links: Link[];
  graph: ForceDirectedGraph;
  _options: { width: any, height: any } = { width: 800, height: 600 };

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.graph.initSimulation(this.options);
  }


  constructor(private d3Service: D3Service, private ref: ChangeDetectorRef) {}

  ngOnInit() {
    /** Receiving an initialized simulated graph from our custom d3 service */
    this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this.links, this.options);

    /** Binding change detection check on each tick
     * This along with an onPush change detection strategy should enforce checking only when relevant!
     * This improves scripting computation duration in a couple of tests I've made, consistently.
     * Also, it makes sense to avoid unnecessary checks when we are dealing only with simulations data binding.
     */
    this.graph.ticker.subscribe((d: any) => {
      this.ref.markForCheck();
    });
  }

  ngAfterViewInit() {
    this.graph.initSimulation(this.options);
  }

  get options() {
    return this._options = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
}
